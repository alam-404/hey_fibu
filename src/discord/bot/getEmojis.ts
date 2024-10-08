import axiosFetch from "../../utils/axiosFetch";

const getEmojis = async (guildID: string) => {
  const url = `/guilds/${guildID}/emojis`;
  const emojis = await axiosFetch(url, {
    method: "GET",
  });
  const data: Array<EmojiStructure> = emojis.data;
  return data;
};

export default getEmojis;
