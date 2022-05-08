import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (): Promise<{
    channel_id: number;
    description: string;
    icon: string;
    moderated: boolean;
    name: string;
    type: string;
    current_user_attributes: {
      can_message: boolean;
      can_message_error: string;
      last_read_id: number;
    };
    last_message_id: number;
    last_read_id: number;
    users: number[];
  }[]>;
};


const name: types = async () => {
  const data = await request(`chat/presence`, {
    method: 'GET',
  });

  return data;
};


export default name;