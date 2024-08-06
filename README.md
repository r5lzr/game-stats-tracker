# METRICS.GA - game stats tracker project

Currently focused on the multiplayer online battle arena, League of Legends. This project offers a way to search for a player's match history and past stats.

More games intended to be added.

## Live Demo

![metrics_anim_short](https://github.com/user-attachments/assets/c7106a16-8391-4435-86e7-39e558219bae)

Project is deployed using Vercel: https://metrics-ga.vercel.app/

## Instructions

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

## Running project locally

- NOTE: You must sign up with a RIOT account and wait to be approved until you gain access to a RIOT API KEY.

### Prerequisites
Update required packages:

```bash
npm install npm@latest -g
# or
pnpm install pnpm@latest -g
```
### Installation
1. Get a free RIOT API Key at: https://developer.riotgames.com/docs/portal
2. Clone the repo:
   ```sh
   git clone https://github.com/r5lzr/game-stats-tracker.git
   ```
3. Install packages:
   ```sh
   npm install
   # or
   pnpm install
   ```
4. Create a file called `.env.local` in your root directory and enter your API into the file as:
   ```js
   RIOT_API_KEY='ENTER YOUR API KEY'
   ```
5. Make sure another file called `.env` is in your root directory and is set to your chosen local server:
   ```js
   URL='http://localhost:3000'
   ```
   
### Run the server

```bash
npm run dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

## Contact

Email - rich.s.salazar@gmail.com
