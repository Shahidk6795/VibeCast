import fetch from "node-fetch";

export default async function handler(req, res) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;      // ⚡ Use environment variable
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET; // ⚡ Use environment variable
  const playlistId = "0cjltBetmIjATWCy91wmXq";

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const playlistData = await playlistResponse.json();

    const tracks = playlistData.items.map(item => ({
      name: item.track.name,
      artists: item.track.artists.map(a => a.name).join(", "),
      image: item.track.album.images[0]?.url,
      previewUrl: item.track.preview_url,
      durationMs: item.track.duration_ms,
    }));

    res.status(200).json({ tracks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch playlist" });
  }
}
