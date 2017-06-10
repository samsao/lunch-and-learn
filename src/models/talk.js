/* eslint-disable filenames/match-exported */
import objectMapper from 'object-mapper';
import Speaker from '@mobile/models/speaker';
import { User } from '@mobile/models/user';

const mapping = {
  id: 'id',
  title: 'title',
  speaker: 'speaker',
  date: 'date',
  description: 'description',
  attendees: 'attendees',
};

type TalkObject = {
  id: string,
  title: string,
  speaker: Speaker,
  date: string,
  description: string,
  attendees: User[]
};

export default class Talk {
  id: string;
  title: string;
  speaker: Speaker;
  date: string;
  description: string;
  attendees: User[];

  static fromJson(json) {
    return new Talk(objectMapper(json, mapping));
  }

  toJson() {
    return objectMapper(this, mapping);
  }

  constructor(params: TalkObject) {
    this.id = params.id;
    this.title = params.title;
    this.speaker = params.speaker;
    this.date = params.date;
    this.description = params.description;
    this.attendees = params.attendees;
  }
}
