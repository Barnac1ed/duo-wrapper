# Duo-Wrapper
## An unoffical API wrapper for Duolingo.

![NPM Downloads](https://img.shields.io/npm/dm/duo-wrapper?style=for-the-badge)
![License](https://img.shields.io/npm/l/duo-wrapper?style=for-the-badge)

### Installation
```bash
npm i duo-wrapper
yarn add duo-wrapper
pnpm  i duo-wrapper
```

### Usage
```js
import Duo from "duo-wrapper";
const duo = new Duo(<username>);

duo.getStreak().then(res => {
    console.log(res); // logs the streak of the specified username
});
```

### Methods
**Get User's Streak**
```js
duo.getStreak().then(res => { ... });
```
**Get User's Name**
```js
duo.getname().then(res => { ... });
```
**Get User's XP**
```js
duo.getXp().then(res => { ... });
```
**Get User's Current Language**
```js
duo.getCurrentLang().then(res => { ... });
```
**Checks If The User Has Premium**
```js
duo.isPlus().then(res => { ... });
```
**Checks If The User Has Mod Perms**
```js
duo.isMod().then(res => { ... });
```
**Get User's Courses**
```js
duo.getCourses().then(res => { ... });
```
**Get User's Motivation**
```js
duo.getMotivation().then(res => { ... });
```
**Get User's Total Crowns**
```js
duo.getTotalCrowns().then(res => { ... });
```
**Get User's Native Language**
```js
duo.getNativeLang().then(res => { ... });
```
**Get User's Achievements**
```js
duo.getAchievements().then(res => { ... });
```
**Checks If The User Has A Verified Email**
```js
duo.isEmailVerified().then(res => { ... });
```

#### License
```txt
MIT License

Copyright (c) 2022 Barnacled

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```