var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./base-component.js";
import { autoBind } from "../Decorator/autobind.js";
// ProjectItem Class
export class ProjectItem extends Component {
    constructor(hostID, project) {
        super("single-project", hostID, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get people() {
        return this.project.people === 1 ? `1 people assigned` : `${this.project.people} people assigned`;
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.people;
        this.element.querySelector("p").textContent = this.project.description;
    }
    DragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    DragEndHandler(event) {
        console.log("Drag end");
    }
    configure() {
        this.element.addEventListener("dragstart", this.DragStartHandler);
        this.element.addEventListener("dragend", this.DragEndHandler);
    }
}
__decorate([
    autoBind
], ProjectItem.prototype, "DragStartHandler", null);
//# sourceMappingURL=project-item.js.map