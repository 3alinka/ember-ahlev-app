import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class HeaderComponent extends Component {
  @tracked isOpen = false;

  @action
  toggle() {
    console.debug("here is called");
    this.isOpen = !this.isOpen;
  }
}
