# News API RESTful Service

This is a RESTful service that allows users to register, login, set their news preferences, and fetch news articles based on their preferences.

# Requirements

1. Node.js version 14 or higher
2. NPM package manager
3. News API key

# Installation

1. Clone the repository
2. Install dependencies: npm install
3. Create a .env file in the root directory and set the NEWS_API_KEY environment variable to your News API key
4. Start the server: npm start

# Usage

## Register a User
To register a user, use the following command:
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"John Doe","email":"johndoe@example.com","password":"password123"}' \
  http://localhost:3000/register
```

## Login a User

```
Login
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"johndoe@example.com","password":"password123"}' \
  http://localhost:3000/login
```

### Set News Preferences

To set news preferences for a user, use the following command:

```
curl -X PUT \
  -H "Authorization: Bearer <access_token>" \
  -H 'Content-Type: application/json' \
  -d '{"preferences": {"category": "business", "source": "bbc-news"}}' \
  http://localhost:3000/preferences
```

Note: Replace <access_token> with the JWT token received from the login API.

### Get News Articles
To get news articles based on the user's preferences, use the following command:

```
curl -X GET \
  -H "Authorization: Bearer <JWT token>" \
  -H 'Content-Type: application/json' \
  http://localhost:3000/news

```

Note: Replace <JWT token> with the actual JWT token obtained from the login endpoint.