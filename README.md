# Demo Code for MiniProgram Meituan Food Ordering TabBar Linkage Effect

## Select Language

- [简体中文](README.zh-CN.md)

## Open Source Purpose

Recently, while working on a restaurant ordering system and designing a UI to simulate the Meituan food delivery ordering effect, I found that the solutions available online were quite complex. Therefore, I decided to open-source my own solution for everyone to use.

## Source Code Highlights

- Simulates the tabbar linkage effect of Meituan's food ordering list;

- The provided solution's source code and algorithm are simpler than what can be found online;

- Resolves the position:sticky bug in WeChat Mini Program's scroll-view under webview rendering mode (this issue doesn't exist in skyline mode);

- Optimized scroll-view scrolling with debounce and other treatments for scroll events, and optimized position calculations to essentially eliminate white screen occurrences in long lists;

- Application of various CSS techniques, including rounded corners;

## Usage

- Download the source code:
  
  ```bash
  git clone https://github.com/scottfly189/minitabbar.git
  ```

- Import into WeChat Mini Program Development Tool

- Install npm dependencies in the miniprogram directory (note: not the root directory):
  
  ```bash
  npm install
  ```

- Build the project using WeChat Mini Program Development Tool (Tools -> Build npm)

## Note

- This source code is based on WeChat Mini Program's native webview rendering mode, but it can be easily adapted to skyline rendering mode;

- Uses WeChat base library version 3.5.8, but can work with lower versions as well;

- If this source code is helpful to you, please give it a star;

## Demo

![](./doc/demo.gif "Demo")
