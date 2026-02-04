# METRICS.GA - game stats tracker project

METRICS.GA is a recreational project built in Next.js with TypeScript.

## 📃 Description

Currently focused on the multiplayer online battle arena, League of Legends. This project offers a way to search for a player's account level, current respective ranks, match history and corresponding past stats.

![image](https://github.com/user-attachments/assets/7c849824-1af8-44a7-9fd7-bd0698ff9ae5)

## 🚀 Live Demo

![metrics_anim_short](https://github.com/user-attachments/assets/c7106a16-8391-4435-86e7-39e558219bae)

## 📝 Instructions

Regions currently available to use: Europe West (EUW), North America (NA).

You must type in your ingame name followed by your tagline with a "#" prefix in the correct region.

### Example usernames
EUW:
- LavaSquid#Crab
- blankor#demon
- Bobby P Herman#EUW
- FuNdAmEnTaLs#EUW
- Simple55am#EUW
- Musashi Eggymoto#EN16S
- Wipe Those Tears#Duck

NA:
- blaberfish2#NA1
- C9 Berserker#NA1
- Chase#Shac
- F9 Cudge#NA1
- foggedftw2#NA1
- Laceration#Zed
- Pobelter#NA1

## 🔧 Running project locally

- NOTE: You must sign up with a Riot Games account and wait to be approved until you gain access to a RIOT API KEY.

- Get a free RIOT API Key at: https://developer.riotgames.com/docs/portal

- Clone the repo:
   ```sh
   git clone https://github.com/r5lzr/game-stats-tracker.git
   cd game-stats-tracker
   ```
- Create a file called `.env.local` in your root directory and enter your API into the file as:
   ```js
   RIOT_API_KEY='ENTER YOUR API KEY'
   ```
   
### Run with Docker (Recommended)
- Run command at project root. This will automatically pull Docker image for this project with PostgreSQL database to set up environment.
   ```bash
   docker compose up --build
   ```

### Run without Docker
- Requirements: Node (LTS recommended), npm or pnpm, then install packages:
   ```sh
   npm install
   # or
   pnpm install
   ```
- Make sure another file called `.env` is in your root directory and is set to your chosen local server and database:
   ```js
   URL='http://localhost:3000'
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?sslmode=require" (placeholder)
   ```
- Run the server:
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚖ License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.
