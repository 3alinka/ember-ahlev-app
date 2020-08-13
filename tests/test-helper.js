import Application from 'ember-ahlev-app/app';
import config from 'ember-ahlev-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
