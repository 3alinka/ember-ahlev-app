import EmberRouter from '@ember/routing/router';
import config from 'ember-ahlev-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.mount('ember-engine-ahlev-job', { path: 'ahlev-job'});
  this.mount('ember-engine-ahlev-movie', { path: 'ahlev-movie'});
  this.mount('ember-engine-ahlev-about', { path: 'ahlev-about'});
});
