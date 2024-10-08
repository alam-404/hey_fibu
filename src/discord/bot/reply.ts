import { InteractionResponseType } from "discord-interactions";
import type { Response } from "express";
import Message from "../ui/Message";

const reply = async (
  res: Response,
  content: string,
  components: Array<MessageComponent> = [],
  tts: boolean = false
) => {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: Message({ content, components, tts }),
  });
};

export default reply;
