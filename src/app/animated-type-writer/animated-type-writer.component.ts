import { Component, OnInit } from '@angular/core';
import { EventData, Label, View } from '@nativescript/core';

import { animate, JSAnimationDefinition } from "../animation-helper";

@Component({
    selector: 'ns-animated-type-writer',
    templateUrl: 'animated-type-writer.component.html'
})

export class AnimatedTypeWriterComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }

    onTap(args: EventData){
        const view = args.object as View
        const lbl = view.page.getViewById('lbl') as Label
        
        const finalText = "Hello beautiful world"

        const def: JSAnimationDefinition = {
            curve: t=>t,
            getRange: () => { return {from: 0, to: finalText.length}},
            step: (v) => {
                lbl.text = finalText.substring(0, Math.ceil(v))
            }

        }

        animate(2000, [def]);
    }
}