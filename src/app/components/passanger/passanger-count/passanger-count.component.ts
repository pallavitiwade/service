import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ipassanger } from 'src/app/models/passanger.model';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.scss']
})
export class PassangerCountComponent implements OnInit,OnChanges{

  @Input() totalCount!:number
  @Input() checkInCount!:number
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }

}
