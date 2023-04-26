import express, { Request, Response } from 'express';
export const newsRoute = express.Router();

//GET /preferences: Retrieve the news preferences for the logged-in user.

//PUT /preferences: Update the news preferences for the logged-in user.

//GET /news: Fetch news articles based on the logged-in user's preferences.

newsRoute.get('/preferences', async(req: Request, res: Response) => {
    res.status(201).send('sendin preferences');
});

newsRoute.put('/preferences', async(req: Request, res: Response) => {
    res.status(201).send('updating preferences');
});

newsRoute.get('/news', async(req: Request, res: Response) => {
    res.status(201).send('getting news');
});