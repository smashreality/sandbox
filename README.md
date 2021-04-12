# Intro

This sandbox is used to quickly spin up a storybook and test out a component idea using Smash Reality's preferred tech stack and code structure.

## Prerequisites

- Typescript knowledge (https://www.typescriptlang.org/)
- Material UI 4.x (JSS and emotion for next version release v5.x) (https://material-ui.com/)
- StorybookJS (https://storybook.js.org/)
- NodeJS + NPM (https://nodejs.org/en/)
- Github (https://github.com/)
- Microsoft Visual Code (with liniting and prettier setup)

### Nice to have (bonus points)

- Jest w/ Enzyme for testing

for full list see ... (README_WORK_WITH_US.md)

# Getting Setup - Unix / Linux

NOTE: these steps are using the terminal, please use whatever method works best for you.

`$ git clone https://github.com/smashreality/sandbox`

`$ cd sandbox`

`$ npm install`

If you use linux or unix

`$ make sb`

for windows

`$ npm run storybook`

in you code editor copy, create or use the folder MyComponent in `src/components/MyComponent` as your component base. look at Example Station Identifier for an example. Review you changes in storybook at `localhost:6006`

# Work With US - Qualifying Requirements

- create a PR to sandbox when finished
- code writen using typescript
- using material ui components to build your component.
- I should be able to pull your branch and review in storybook by running NPM run storybook and visiting localhost:6006 not localhost:3000 that’s react PWA build.
- bonus marks for any testing used.
