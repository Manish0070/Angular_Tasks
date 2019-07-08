
import { Component, OnInit } from '@angular/core';
import { SiblingInteractionServiceService } from '../sibling-interaction-service.service';
@Component({
 selector: 'app-task7-child1',
 templateUrl: './component1.component.html',
 styleUrls: ['./component1.component.css']
})
export class Task7Child1Component implements OnInit {
 constructor(private siblingService: SiblingInteractionServiceService) { }
 ngOnInit() {
 }
 sendMessage(data) {
   this.siblingService.message.next(data);
 }
}
