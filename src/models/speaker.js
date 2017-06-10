/* eslint-disable filenames/match-exported */
import objectMapper from 'object-mapper';
import { User } from '@mobile/models/user';
import Talk from '@mobile/models/talk';

const mapping = {
  id: 'id',
  name: 'name',
  nickname: 'nickname',
  email: 'email',
  picture: 'picture',
  team: 'team',
  position: 'position',
  biography: 'biography',
  talks: 'talks',
  talksAttended: 'talksAttended',
};

export default class Speaker extends User {
  talks: Talk[];

  static fromJson(json) {
    return new Speaker(objectMapper(json, mapping));
  }

  toJson() {
    return objectMapper(this, mapping);
  }

  constructor(params: any) {
    super(params);
    this.talks = params.talks;
  }
}
