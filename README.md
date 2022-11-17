### Requirements

- Node.js 14+ and yarn

### Getting started

Run the following command on your local environment:

```shell
clone the repo
yarn
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── apis                        # Apis contain api request with axios, d
│   ├── assets                      # Assets contain static file
│   │      ├──  images
│   │      └──  svgs
│   ├── configs                     # Overall configs: axios, constants...
│   ├── hooks                       # Custom hooks of application
│   ├── modules                     # Modules contain components of each page
│   │      ├──  home
│   │      ├──  lending
│   │      └──  shared              # Shared contains common components then will be reused
│   ├── page                        # Pages folder
│   │      ├──  home
│   │      ├──  lending
│   │      └──  index.tsx           # HomePage
│   ├── styles                      # Styles folder
│   ├── types                       # contain all types ,interface of application
│   └── utils                       # utils folder
├── .env
├── .env.dev                        # dev env example
├── .env.prod                       # dev prod example
├── .env.staging                    # dev staging example
├── next.config.js                  # Next config
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
