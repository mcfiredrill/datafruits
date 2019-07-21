import DS from 'ember-data';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  start: DS.attr(),
  end: DS.attr(),
  title: DS.attr(),
  imageUrl: DS.attr(),
  thumbImageUrl: DS.attr(),
  description: DS.attr(),
  tracks: DS.hasMany('track'),
  djs: DS.hasMany('dj'),
  host: computed('djs', function(){
    return this.djs.get('firstObject');
  }),

  htmlDescription: DS.attr(),
  tweetContent: DS.attr(),
  startsAt: alias('start'),
  endsAt: alias('end')
});
