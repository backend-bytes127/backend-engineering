import express, { NextFunction, Request, Response } from 'express';
export const newsRoute = express.Router();
import { checkAuthToken } from '../middleware/auth';
import userRepository from '../repositories/UserRepository';
import NewsAPI from 'ts-newsapi';

const {NEWS_TOKEN} = process.env;
const newsAPI = new NewsAPI(NEWS_TOKEN!);


newsRoute.get('/preferences', checkAuthToken, async(req: any, res: Response, next: NextFunction) => {
    const email = req.user.email;
    const data = await userRepository.getUserBy({id: email, matchField: 'email'})
    res.status(201).send(data.data.preferences);
}) 


newsRoute.put('/preferences', checkAuthToken,  async(req: any, res: Response) => {
    const email = req.user.email;
    const {preferences} = req.body;
    const {category, source} = preferences;
    console.log(category, source);
    
    await userRepository.updateUserPreferences(email, preferences)
    
    res.status(201).send('preferences updated');
});

newsRoute.get('/news',  checkAuthToken, async(req: any, res: Response) => {
    
        const email = req.user.email;
        const data = await userRepository.getUserBy({id: email, matchField: 'email'})
        const preferences = data.data.preferences;
        const source = preferences.source;
        const category = preferences.category;
        const articles = await newsAPI.getTopHeadlines({
        sources : [source],
       // category: category
      });
    
      //console.log(`Fetched ${articles.totalResults} articles for source ${source} and category ${category}`);
      //console.log('Articles:', articles.articles);
       res.status(201).send(articles.articles);
});
