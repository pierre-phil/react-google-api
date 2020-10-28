#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### It is a simple app showing most popular & trending Google Fonts based on Google Fonts API, with ability to preview result with sample text.

Site is live here : https://react-googlefonts-api.netlify.app/

## Packages used

Run `yarn` or `npm install` to install

- "bootstrap": "^5.0.0-alpha2"
- "react-google-font-loader": "^1.1.0"

## Structure

```
src
└─ index.js
    └─ App.js
           └── <Header />
                ├── <ModeContextProvider>
                    ├── <AppContainer>
                        ├── <PreviewContextProvider>
                        └── <SizeContextProvider>
                          ├── <GoogleFontsLoader />
                            ├── <Preview />
                            └── <Fonts />
                          └── </SizeContextProvider>
                        └── <PreviewContextProvider>
                    └── <AppContainer>
                ├── </ModeContextProvider>
                └── </Footer>             
                    
```
