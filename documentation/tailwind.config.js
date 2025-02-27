const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            zIndex: {
                modal: 100,
            },
            colors: {
                discord: "#5865F2",
                twitter: "#00AAEC",
                refine: {
                    red: "#FF4C4D",
                    orange: "#FF9933",
                    yellow: "#FFBF00",
                    green: "#1FAD66",
                    "green-alt": "#26D97F",
                    cyan: "#0FBDBD",
                    "cyan-alt": "#47EBEB",
                    blue: "#0080FF",
                    "blue-alt": "#6EB3F7",
                    indigo: "#3333FF",
                    "indigo-alt": "#8080FF",
                    purple: "#8000FF",
                    "purple-alt": "#B366FF",
                    pink: "#ED5EC9",
                    bg: "#0A0A29",
                    kdb: "#DBDBF0",
                    "bg-alt": "#262640",
                    "link-dark": "#6EB3F7",
                    "link-light": "#0080FF",
                    "landing-tile-icon-border": "#4D4DB2",
                    "landing-playground-border": "#4D4DB2",
                    "landing-tile-image-border": "#272762",
                    "landing-stats-fallback-bg": "#242442",
                    "landing-footer-bg": "#0F0F3D",
                    "landing-footer-border": "#2E2E78",
                    "walkthrough-button-bg": "#4D4DB2",
                    "walkthrough-button-alt-bg": "#474E6B",
                    "pricing-table-alt-dark": "#181927",
                    "pricing-table-alt": "#F4F8FB",
                },
                gray: {
                    0: "#FFFFFF",
                    50: "#F4F8FB",
                    100: "#EDF2F7",
                    200: "#DEE5ED",
                    300: "#CFD7E2",
                    400: "#A3ADC2",
                    500: "#6C7793",
                    600: "#474E6B",
                    700: "#303450",
                    800: "#1D1E30",
                    900: "#14141F",
                    1000: "#000000",
                },
                "refine-week": {
                    supabase: {
                        "cover-shadow": "rgba(62, 207, 142, 0.25)",
                        "day-indicator-start": "#1FAD66",
                        "day-indicator-stop": "#3ECF8E",
                    },
                    strapi: {
                        "cover-shadow": "rgba(73, 69, 255, 0.25)",
                        "day-indicator-start": "#4945FF",
                        "day-indicator-stop": "#4D88FF",
                    },
                },
            },
            fontFamily: {
                sans: [
                    "var(--primary-font-sans)",
                    ...defaultTheme.fontFamily.sans,
                ],
                mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.serif],
                disket: ["Disket Mono", ...defaultTheme.fontFamily.mono],
                inter: ["Inter", ...defaultTheme.fontFamily.serif],
                "jetBrains-mono": [
                    "JetBrains Mono",
                    ...defaultTheme.fontFamily.mono,
                ],
            },
            dropShadow: {
                "showcase-highlight": [
                    "0px 3px 7px rgba(108, 119, 147, 0.141)",

                    "0px 13px 13px rgba(108, 119, 147, 0.141)",

                    "0px 20px 18px rgba(108, 119, 147, 0.18)",

                    "0px 34px 21px rgba(108, 119, 147, 0.2)",
                    "0px 54px 23px rgba(108, 119, 147, 0)",
                ],
                "github-stars-glow": [
                    "0px 0px 3px #FF993330",
                    "0px 0px 6px #FF9933A0",
                    "0px 0px 16px #FF9933A0",
                    "0px 0px 16px #FF9933",
                ],
            },
            boxShadow: {
                modal: "4px 8px 16px rgba(42, 42, 66, 0.25)",
                tile: "6px 8px 16px 0 rgba(42, 42, 66, 0.4)",
                integrationTile: "3px 4px 8px 0 rgba(42, 42, 66, 0.25)",
                tagTile: "3px -2px 8px 0 rgba(42, 42, 66, 0.25)",
                startTiles: "4px 8px 16px rgba(42, 42, 66, 0.25)",
                menuItem: "2px 4px 8px rgba(36, 36, 54, 0.2)",
                "menu-dark": "0px 0px 0px 4px rgba(48, 52, 80, 0.25)",
                "menu-light": "0px 0px 0px 4px rgba(222, 229, 237, 0.25)",
                "landing-sweet-spot-code-dark":
                    "0px 2.26915px 2.21381px 0px rgba(0, 0, 0, 0.07), 0px 5.45308px 5.32008px 0px rgba(0, 0, 0, 0.11), 0px 10.26767px 10.01724px 0px rgba(0, 0, 0, 0.13), 0px 18.31577px 17.86905px 0px rgba(0, 0, 0, 0.15), 0px 34.25764px 33.42209px 0px rgba(0, 0, 0, 0.19), 0px 82px 80px 0px rgba(0, 0, 0, 0.26)",
                "landing-sweet-spot-code-light":
                    "0px 2.26915px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px 5.45308px 5.32008px 0px rgba(0, 0, 0, 0.04), 0px 10.26767px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 18.31577px 17.86905px 0px rgba(0, 0, 0, 0.05), 0px 34.25764px 33.42209px 0px rgba(0, 0, 0, 0.06), 0px 82px 80px 0px rgba(0, 0, 0, 0.09)",
            },
            backgroundColor: {
                "landing-header-bg": "rgba(10, 10, 41, 0.70)",
                "landing-header-border": "rgba(48, 52, 80, 0.70)",
                "common-header-bg-dark": "rgba(29, 30, 48, 0.70)",
                "common-header-bg-light": "rgba(244, 248, 251, 0.85)",
            },
            backdropBlur: {
                "header-blur": "12px",
            },
            backgroundImage: {
                "landing-noise": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                ],
                noise: "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                "walkthrough-button-shadow":
                    "conic-gradient(from 231deg at 50% 50%, #A3A3F5 0%, #4D4DB2 6%, #4D4DB2 44%, #A3A3F5 50%, #4D4DB2 56%, #4D4DB2 94%, #A3A3F5 100%)",
                "walkthrough-button-alt-shadow":
                    "conic-gradient(from 231deg at 50% 50%, #A3A3F5 0%, #474E6B 6%, #474E6B 44%, #A3A3F5 50%, #474E6B 56%, #474E6B 94%, #A3A3F5 100%)",
                "selected-tab-light":
                    "linear-gradient(180deg, rgba(110, 179, 247, 0) 50%, rgba(0, 128, 255, 0.25) 100%)",
                "selected-tab-dark":
                    "linear-gradient(180deg, rgba(110, 179, 247, 0) 50%, rgba(0, 128, 255, 0.25) 100%)",
                "landing-stars": [
                    "linear-gradient(180deg, rgba(10,10,41,0.6) 0%, rgba(10, 10, 41, 0.4) 100%)",
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-stars.webp)",
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                ],
                "landing-component-divider-dark":
                    "linear-gradient(90deg, rgba(48, 52, 80, 0) 0%, #303450 12.5%, #303450 87.5%, rgba(48, 52, 80, 0) 100%)",
                "landing-component-divider":
                    "linear-gradient(270deg, rgba(31, 173, 102, 0) 0%, rgba(31, 173, 102, 0.5) 12.5%, rgba(31, 173, 102, 0.5) 87.5%, rgba(31, 173, 102, 0) 100%)",
                "landing-component-badge": [
                    "linear-gradient(306deg, #303450 0%, rgba(20, 20, 31, 0.5) 100%)",
                    "linear-gradient(168deg, rgba(38, 217, 127, 0.9) 15%, rgba(71, 235, 235, 0) 50%)",
                    "linear-gradient(0deg, #303450, #303450)",
                ],
                "landing-component-badge-glow":
                    "radial-gradient(50% 50% at 50% 50%, rgba(38, 217, 127, 0.1) 0%, rgba(71, 235, 235, 0) 100%)",
                "landing-text-bg":
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
                "landing-text-bg-alt":
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 80%, rgba(255,255,255,0.4) 100%)",
                "landing-sliding-highlight-bg":
                    "linear-gradient(180deg, #3FDCF7 0%, rgba(63, 220, 247, 0.6) 100%)",
                "landing-rainbow":
                    "conic-gradient(from 180deg at 50% 50%, #3FDCF7 0deg, #1890FF 51.43deg, #6813CB 102.86deg, #FF003D 154.29deg, #FF8A00 205.71deg, #FFD600 257.14deg, #67BE23 308.57deg, #3FDCF7 360deg)",
                "landing-ghost":
                    "conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 10%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.25) 60%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0.25) 80%, rgba(255, 255, 255, 0.25) 100%)",
                "landing-hero-video-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-video-bg.webp')",
                "landing-hero-bottom-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-bottom-bg.svg')",
                "landing-hero-mobile-animation-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-mobile-animation.svg')",
                "landing-video-bottom-mobile-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-video-bottom-mobile.svg')",
                "landing-video-bottom-line":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-video-bottom-line.svg')",
                "landing-video-bottom-line-glow":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-video-bottom-line-glow.svg')",
                "landing-linear-spectrum":
                    "linear-gradient(90deg, #FFFE00 0%, #FF9933 12.5%, #FF4C4D 25%, #ED5EC9 37.5%, #8000FF 50%, #3333FF 62.5%, #0080FF 75%, #47EBEB 87.5%, #26D97F 100%)",
                "landing-planar-grid":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid.svg')",
                "landing-planar-grid-reversed":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid-reversed.svg')",
                "landing-planar-grid-mobile":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid-mobile.svg')",
                "landing-planar-grid-reversed-mobile":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid-reversed-mobile.svg')",
                "landing-tile-image-bg":
                    "radial-gradient(50.33% 83.06% at -0.33% 100%, rgba(77, 77, 179, 0.5) 0%, rgba(77, 77, 179, 0) 100%)",
                "landing-tile-tile-bg":
                    "radial-gradient(232% 232% at 100% 100%, rgba(77, 77, 179, 0) 0%, rgba(77, 77, 179, 0.05) 33.33%, rgba(77, 77, 179, 0.1) 66.67%, rgba(77, 77, 179, 0.2) 100%)",
                "landing-tile-border-bg":
                    "radial-gradient(100% 100% at 0% 0%, #4D4DB3 0%, rgba(77, 77, 179, 0.05) 50%, rgba(77, 77, 179, 0.5) 100%)",
                "landing-tile-grid-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-tile-grid.svg')",
                "landing-tile-grid-mobile-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-tile-grid-mobile.svg')",
                "landing-stats-bg": [
                    "radial-gradient(59.21% 56.25% at 0% 0%, #17174F 0%, rgba(23, 23, 79, 0) 100%)",
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.165) 100%)",
                ],
                "landing-stats-border-bg":
                    "conic-gradient(from -90deg at 50% 50%, rgba(77, 77, 179, 0) 0deg, #4D4DB3 39.37deg, rgba(77, 77, 179, 0) 86.25deg, rgba(77, 77, 179, 0) 198.75deg, #4D4DB3 232.5deg, rgba(77, 77, 179, 0) 275.62deg, rgba(77, 77, 179, 0) 360deg)",
                "landing-stats-text-dark":
                    "linear-gradient(180deg, #FFF 25%, rgba(255, 255, 255, 0.25) 100%)",
                "landing-stats-text":
                    "linear-gradient(180deg, #14141F 25%, rgba(20, 20, 31, 0.50) 100%)",
                "landing-playground-bg": [
                    "linear-gradient(90deg, rgba(23, 23, 79, 0) 0%, #17174F 100%)",
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.165) 0%, rgba(0, 0, 0, 0.33) 50%, rgba(0, 0, 0, 0.165) 100%)",
                ],
                "landing-playground-slide-left-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-playground-slide-left.svg')",
                "landing-playground-slide-right-bg":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-playground-slide-right.svg')",
                "landing-trusted-by-developers-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(40% 100% at 110% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%)",
                ],
                "landing-trusted-by-developers": [
                    "radial-gradient(40% 100% at 110% 20%, rgba(0, 128, 255, 0.15) 0%, #F4F8FB 100%)",
                ],
                "landing-packages-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 100% at 50% -40%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%)",
                ],
                "landing-packages": [
                    "radial-gradient(50% 100% at 50% -60%, rgba(0, 128, 255, 0.15) 0%, #F4F8FB 100%)",
                ],
                "landing-sweet-spot-glow-red-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(250, 56, 82, 0.15) 0%, rgba(250, 56, 82, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-yellow-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(249, 213, 31, 0.15) 0%, rgba(249, 213, 31, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-orange-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(249, 140, 31, 0.15) 0%, rgba(249, 140, 31, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-cyan-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(71, 209, 191, 0.15) 0%, rgba(71, 209, 191, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-blue-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(61, 184, 245, 0.15) 0%, rgba(61, 184, 245, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-indigo-dark": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(89, 89, 255, 0.15) 0%, rgba(89, 89, 255, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-red-light": [
                    "radial-gradient(50% 50% at 70% 0%, rgba(210, 45, 45, 0.05) 0%, rgba(210, 45, 45, 0.00) 100%)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(210, 45, 45, 0.15) 0%, rgba(210, 45, 45, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-yellow-light": [
                    "radial-gradient(50% 50% at 70% 0%, rgba(244, 106, 37, 0.05) 0%, rgba(244, 106, 37, 0.00) 100%)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(244, 106, 37, 0.15) 0%, rgba(244, 106, 37, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-orange-light": [
                    "radial-gradient(50% 50% at 70% 0%, rgba(255, 159, 26, 0.05) 0%, rgba(255, 159, 26, 0.00) 100%)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 159, 26, 0.15) 0%, rgba(255, 159, 26, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-cyan-light": [
                    "radial-gradient(50% 50% at 70% 0%, rgba(8, 145, 145, 0.05) 0%, rgba(8, 145, 145, 0.00) 100%)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(8, 145, 145, 0.15) 0%, rgba(8, 145, 145, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-blue-light": [
                    "radial-gradient(50% 50% at 70% 0%, rgba(31, 128, 224, 0.05) 0%, rgba(31, 128, 224, 0.00) 100%)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(31, 128, 224, 0.15) 0%, rgba(31, 128, 224, 0.00) 100%)",
                ],
                "landing-sweet-spot-glow-indigo-light": [
                    "radial-gradient(50% 50% at 70% 0%, rgba(105, 59, 198, 0.05) 0%, rgba(105, 59, 198, 0.00) 100%)",
                    "radial-gradient(50% 50% at 50% 50%, rgba(105, 59, 198, 0.15) 0%, rgba(105, 59, 198, 0.00) 100%)",
                ],
                "landing-packages-text":
                    "linear-gradient(180deg, #14141F 0%, #474E6B 100%)",
                "landing-packages-text-dark":
                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.50) 100%)",
                "hackathon-button-bg":
                    "linear-gradient(90deg, rgba(255, 76, 166, 0.3) 0%, rgba(128, 0, 255, 0.3) 50%, rgba(0, 128, 255, 0.3) 100%);",
                "refine-week-supabase-timeline-item-bg":
                    "linear-gradient(360deg, rgba(62, 207, 142, 0) 0%, rgba(62, 207, 142, 0.25) 50%, rgba(62, 207, 142, 0) 100%)",
                "refine-week-supabase-timeline-item-bg-lg":
                    "linear-gradient(256deg, rgba(62, 207, 142, 0.25) 0%, rgba(62, 207, 142, 0) 60%)",
                "refine-week-strapi-timeline-item-bg":
                    "linear-gradient(360deg, rgba(73, 69, 255, 0) 0%, rgba(73, 69, 255, 0.25) 50%, rgba(73, 69, 255, 0) 100%)",
                "refine-week-strapi-timeline-item-bg-lg":
                    "linear-gradient(256deg, rgba(73, 69, 255, 0.25) 0%, rgba(73, 69, 255, 0) 60%)",
                "pricing-text-bg-red":
                    "linear-gradient(90deg, #FF4C4D 30.89%, #FF9933 48.82%)",
                "pricing-text-bg-green":
                    "linear-gradient(90deg, #0FBDBD 40.72%, #26D97F 51.09%)",
                "pricing-text-bg-enterprise":
                    "linear-gradient(90deg, #FF9933 37.5%, #FF4C4D 73.48%)",
                "week-of-refine-strapi-card":
                    "linear-gradient(207deg, rgba(73, 69, 255, 0.25) 0%, rgba(73, 69, 255, 0.00) 100%)",
                "week-of-refine-supabase-card":
                    "linear-gradient(207deg, rgba(62, 207, 142, 0.25) 0%, rgba(62, 207, 142, 0.00) 100%)",
                "week-of-refine-strapi-card-light":
                    "linear-gradient(207deg, rgba(73, 69, 255, 0.15) 0%, rgba(73, 69, 255, 0.00) 100%)",
                "week-of-refine-supabase-card-light":
                    "linear-gradient(207deg, rgba(62, 207, 142, 0.15) 0%, rgba(62, 207, 142, 0.00) 100%)",
                "banner-examples-gray": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    `radial-gradient(70.09% 100% at 50% 0%, #474E6B 0%, #303450 100%)`,
                ],
                "banner-examples-purple": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    `radial-gradient(294.84% 141.42% at 100% 100%, #33F 0%, #8000FF 50%, #303450 100%)`,
                ],
                "banner-examples-modal-gray": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    `radial-gradient(75.69% 100% at 50% 0%, #474E6B 0%, #303450 100%)`,
                ],
                "banner-examples-modal-purple": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    `radial-gradient(152.26% 141.42% at 100% 100%, #33F 0%, #8000FF 50%, #303450 100%)`,
                ],
                "banner-examples-sider-gray": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    `radial-gradient(75.69% 100% at 50% 0%, #474E6B 0%, #303450 100%)`,
                ],
                "banner-examples-sider-purple": [
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                    `radial-gradient(191.28% 141.42% at 100% 100%, #33F 0%, #8000FF 50%, #303450 100%)`,
                ],
                "banner-examples-text":
                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.50) 100%)",
                "top-announcement-text":
                    "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)",
                "sidebar-item-shiny-dark":
                    "radial-gradient(457.67% 141.42% at 0% 0%, rgba(71, 235, 235, 0.10) 0%, rgba(71, 235, 235, 0.20) 100%)",
                "sidebar-item-shiny-light":
                    "radial-gradient(457.67% 141.42% at 0% 0%, rgba(0, 128, 255, 0.20) 0%, rgba(0, 128, 255, 0.10) 100%)",
                "top-announcement-bg-tr":
                    "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/top-announcement-tr.png')",
                "landing-hero-item-name-gradient":
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
                "landing-hero-item-background":
                    "radial-gradient(104% 104% at 0% 0%, rgba(249, 210, 54, 0.10) 0%, rgba(249, 210, 54, 0.00) 100%)",
                "landing-hero-beam-bottom":
                    "linear-gradient(90deg, rgba(255,255,255,0), #47EBEB, rgba(255,255,255,0))",
                "landing-hero-beam-bottom-light":
                    "linear-gradient(90deg, rgba(255,255,255,0), #0080FF, rgba(255,255,255,0))",
                "landing-hero-github-stars-gradient":
                    "radial-gradient(260.41% 41.87% at 8.38% 50%, rgba(255, 153, 51, 0.10) 0%, rgba(255, 153, 51, 0.00) 100%)",
                "landing-hero-github-stars-text-light":
                    "linear-gradient(180deg, #14141F 0%, #6C7793 100%)",
                "landing-hero-github-stars-text-dark":
                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.50) 100%)",
                "landing-hero-xray-dot-center-bg":
                    "radial-gradient(100% 100% at 0% 0%, #74FFFF 0%, #0FBDBD 50%, #0FBDBD 100%)",
                "landing-hero-xray-dot-center-bg-light":
                    "radial-gradient(100% 100% at 0% 0%, #74FFFF 0%, #0080FF 50%, #0080FF 100%)",
                "landing-wizard-option-bg-dark": [
                    "radial-gradient(50% 50% at 50% 50%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0) 100%)",
                    "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
                ],
                "landing-wizard-option-bg-light": [
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 128, 255, 0.15) 0%, rgba(0, 128, 255, 0) 100%)",
                ],
                "landing-hero-beam-bg":
                    "conic-gradient(from 280deg, currentColor 6%, transparent 14%, transparent 100%)",
                "footer-dark-bg": [
                    "linear-gradient(180deg, rgba(29, 30, 48, 0.5) 0%, #14141F 100%)",
                ],
                "landing-wizard-side-bg": [
                    "radial-gradient(50% 50% at 50% 50%, rgba(48, 52, 80, 0.75) 0%, rgba(48, 52, 80, 0.38) 50%, rgba(48, 52, 80, 0.00) 100%)",
                ],
                "landing-wizard-side-bg-light": [
                    "radial-gradient(50% 50% at 50% 50%, rgba(48, 52, 80, 0.75) 0%, rgba(48, 52, 80, 0.1) 50%, rgba(48, 52, 80, 0.00) 100%)",
                ],
                "landing-copy-command-hover-bg-dark": [
                    "radial-gradient(transparent 30%, rgba(71, 235, 235, 0.25))",
                ],
                "landing-copy-command-hover-bg-light": [
                    "radial-gradient(transparent 30%, rgba(0, 128, 255, 0.1))",
                ],
            },
            backgroundPosition: {
                "landing-wizard-option-right":
                    "top -350px right -350px, center",
                "landing-wizard-option-left":
                    "bottom -350px left -350px, center",
                "landing-wizard-side-left-position": "center left",
                "landing-wizard-side-right-position": "center right",
                "landing-sweet-spot-glow-position-lg":
                    "center, calc(50% + 800px) calc(50% - 300px)",
                "landing-sweet-spot-glow-position-md":
                    "center, calc(50% + 490px) calc(50% + 180px)",
                "landing-sweet-spot-glow-position-xs":
                    "center, calc(50% - 30px) calc(50% + 300px)",
                "wheel-already-invented-position": "center",
            },
            backgroundSize: {
                "landing-wizard-option": "600px 600px, auto",
                "landing-wizard-side-size": "512px 512px",
                "landing-sweet-spot-glow-size-lg": "auto auto, 1600px 1600px",
                "landing-sweet-spot-glow-size-xs": "auto auto, 656px 656px",
                "wheel-already-invented-size": "100% 1px",
                "landing-github-stars-border-bg-size": "72px 72px",
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                beat: "2s ease-in-out 1.5s infinite normal forwards running landing-hero-beat",
                "playground-slide-down":
                    "playground-slide-down 45s linear infinite",
                "playground-slide-down-mobile":
                    "playground-slide-down-mobile 45s linear infinite",
                "playground-slide-up":
                    "playground-slide-up 45s linear infinite",
                "playground-slide-up-mobile":
                    "playground-slide-up-mobile 45s linear infinite",
                "hackathon-button-bg":
                    "hackathon-button-bg 2s ease-in-out infinite alternate",
                "walkthrough-bounce":
                    "walkthrough-bounce 3s ease-in-out infinite",
                "top-announcement-glow":
                    "top-announcement-glow 1s ease-in-out infinite alternate",
                "landing-hero-grid-beats":
                    "landing-hero-grid-beats 2s ease-in-out infinite",
                "hero-logo-pulse": "hero-logo-pulse 4s ease-in-out infinite",
                "mini-bounce": "mini-bounce 3s ease-in-out infinite",
                "dot-waves": "dot-waves 2.5s linear infinite",
                "landing-packages-left":
                    "landing-packages-left 65s linear infinite",
                "landing-packages-right":
                    "landing-packages-right 60s linear infinite",
                "code-scroll": "code-scroll 25s linear infinite",
                "beam-spin": "beam-spin 3s linear 1 forwards",
                "landing-hero-beam-line":
                    "landing-hero-beam-line 7.5s ease-in-out infinite",
                "landing-hero-beam-glow":
                    "landing-hero-beam-glow 7.5s ease-in-out infinite",
                "landing-hero-beam-bottom":
                    "landing-hero-beam-bottom 7.5s ease-in-out infinite",
                "showcase-bottom-fade-reveal":
                    "showcase-bottom-fade-reveal 0.3s ease-in-out forwards",
                "opacity-reveal": "opacity-reveal 1s ease-in-out forwards",
                "wheel-already-invented-reveal":
                    "wheel-already-invented-reveal 0.6s cubic-bezier(.23,.95,.64,1.24) forwards",
                "showcase-reveal": "showcase-reveal 0.3s ease-in-out forwards",
                "github-stars-border":
                    "github-stars-border 10s linear infinite alternate",
                "github-stars-glow":
                    "github-stars-glow 10s linear infinite alternate",
            },
            keyframes: {
                "code-scroll": {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "100%": {
                        transform: "translateY(-448px)",
                    },
                },
                "walkthrough-bounce": {
                    "0%": {
                        transform: "translateY(4%)",
                    },
                    "50%": {
                        transform: "none",
                    },
                    "100%": {
                        transform: "translateY(4%)",
                    },
                },
                "hackathon-button-bg": {
                    "0%": {
                        backgroundPosition: "0% 0%",
                    },
                    "100%": {
                        backgroundPosition: "100% 0%",
                    },
                },
                "landing-hero-beat": {
                    "0%": {
                        opacity: 0.4,
                    },
                    "5%": {
                        opacity: 0.4,
                    },
                    "50%": {
                        opacity: 1,
                    },
                    "95%": {
                        opacity: 0.4,
                    },
                    "100%": {
                        opacity: 0.4,
                    },
                },
                "playground-slide-down-mobile": {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "99.99%": {
                        transform: "translateY(-1655px)",
                    },
                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
                "playground-slide-down": {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "99.99%": {
                        transform: "translateY(-3329px)",
                    },
                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
                "playground-slide-up-mobile": {
                    "0%": {
                        transform: "translateY(-1655px)",
                    },
                    "99.99%": {
                        transform: "translateY(0px)",
                    },
                    "100%": {
                        transform: "translateY(-1655px)",
                    },
                },
                "playground-slide-up": {
                    "0%": {
                        transform: "translateY(-3328px)",
                    },
                    "99.99%": {
                        transform: "translateY(0px)",
                    },
                    "100%": {
                        transform: "translateY(-3328px)",
                    },
                },
                "top-announcement-glow": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                    },
                },
                "landing-hero-grid-beats": {
                    "0%": {
                        fillOpacity: 0,
                    },
                    "50%": {
                        fillOpacity: 0.8,
                    },
                    "100%": {
                        fillOpacity: 0,
                    },
                },
                "hero-logo-pulse": {
                    "0%": {
                        fillOpacity: 1,
                    },
                    "50%": {
                        fillOpacity: 0.75,
                    },
                    "100%": {
                        fillOpacity: 1,
                    },
                },
                "mini-bounce": {
                    "0%": {
                        transform: "translateY(0%)",
                    },
                    "50%": {
                        transform: "translateY(-8%)",
                    },
                    "100%": {
                        transform: "translateY(0%)",
                    },
                },
                "dot-waves": {
                    "0%": {
                        transform: "scale(0)",
                        opacity: 1,
                    },
                    "75%": {
                        transform: "scale(2)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "scale(0)",
                        opacity: 0,
                    },
                },
                "landing-packages-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "landing-packages-right": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(50%)" },
                },
                "beam-spin": {
                    "0%": {
                        transform:
                            "translateX(-45px) translateY(-190px) translateZ(0) rotate(0deg)",
                    },
                    "100%": {
                        transform:
                            "translateX(-45px) translateY(-190px) translateZ(0) rotate(-360deg)",
                    },
                },
                "landing-hero-beam-line": {
                    "0%": {
                        opacity: 1,
                    },
                    "50%": {
                        opacity: 0.5,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
                "landing-hero-beam-glow": {
                    "0%": {
                        opacity: 1,
                    },
                    "50%": {
                        opacity: 0.25,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
                "landing-hero-beam-bottom": {
                    "0%": {
                        opacity: 1,
                        transform: "scaleX(1)",
                    },
                    "50%": {
                        opacity: 0.5,
                        transform: "scaleX(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scaleX(1)",
                    },
                },
                "showcase-bottom-fade-reveal": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(96px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
                "opacity-reveal": {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
                "wheel-already-invented-reveal": {
                    "0%": {},
                    "100%": {
                        transform: "translateX(0)",
                    },
                },
                "showcase-reveal": {
                    "0%": {
                        // transform: "translateY(-100px)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: 1,
                    },
                },
                "github-stars-border": {
                    "0%": {
                        transform: "translateX(-72px)",
                    },
                    "100%": {
                        transform: "translateX(216px)",
                    },
                },

                "github-stars-glow": {
                    "0%": {
                        transform: "translateX(0) scale(0.5)",
                    },
                    "50%": {
                        transform: "translateX(78px) scale(1)",
                    },
                    "100%": {
                        transform: "translateX(156px) scale(0.5)",
                    },
                },
            },
        },
        screens: {
            ...defaultTheme.screens,
            "content-sm": "480px",
            "content-md": "656px",
            "content-2xl": "864px",
            "content-4xl": "1536px",
            "header-sm": "640px",
            "header-md": "1200px",
            "landing-content": "944px",
            "landing-xs": "360px",
            "landing-sm": "720px",
            "landing-md": "960px",
            "landing-lg": "1296px",
            "landing-xl": "1440px",
            "landing-footer": "1264px",
            "pricing-content-sm": "640px",
            "pricing-content": "960px",
            "blog-sm": "688px",
            "blog-md": "1000px",
            "blog-lg": "1280px",
            "blog-max": "1408px",
            "blog-xl": "1440px",
            "blog-2xl": "1584px",
            walkthrough: "976px",
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(({ addVariant }) => {
            addVariant("light", `[data-theme="light"] &`);
        }),
    ],
    corePlugins: {
        // preflight: false,
    },
};
