export type EmbedKind =
  | 'video'
  | 'spotify-video'
  | 'tiktok'
  | 'instagram'
  | 'audio'
  | 'audio-list'
  | 'link';

/** Turn a normal share link into an embed source and a layout kind. */
export function embedKind(u: string): { src: string; kind: EmbedKind } {
  let m;
  if ((m = u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/)))
    return { src: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0`, kind: 'video' };
  if ((m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return { src: `https://player.vimeo.com/video/${m[1]}?dnt=1`, kind: 'video' };
  if ((m = u.match(/instagram\.com\/(?:[\w.]+\/)?(p|reel|tv)\/([\w-]+)/)))
    return { src: `https://www.instagram.com/${m[1]}/${m[2]}/`, kind: 'instagram' };
  if ((m = u.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/))) return { src: `https://www.tiktok.com/embed/v2/${m[1]}`, kind: 'tiktok' };
  if ((m = u.match(/open\.spotify\.com\/episode\/(\w+)\/video/)))
    return { src: `https://open.spotify.com/embed/episode/${m[1]}/video`, kind: 'spotify-video' };
  if ((m = u.match(/open\.spotify\.com\/(episode|show)\/(\w+)/)))
    return { src: `https://open.spotify.com/embed/${m[1]}/${m[2]}`, kind: m[1] === 'show' ? 'audio-list' : 'audio' };
  if ((m = u.match(/podcasts\.apple\.com\/([a-z]{2})\/podcast\/(?:[^/]+\/)?id(\d+)(?:\?i=(\d+))?/)))
    return {
      src: `https://embed.podcasts.apple.com/${m[1]}/podcast/id${m[2]}${m[3] ? `?i=${m[3]}&theme=light` : '?theme=light'}`,
      kind: m[3] ? 'audio' : 'audio-list',
    };
  if (/facebook\.com\/.+\/videos\/|fb\.watch/.test(u))
    return { src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(u)}&show_text=false`, kind: 'video' };
  return { src: u, kind: 'link' };
}

/** Episodes (audio/video players) vs. social posts — shown in separate sections. */
export const isSocial = (u: string) => ['instagram', 'tiktok'].includes(embedKind(u).kind);
