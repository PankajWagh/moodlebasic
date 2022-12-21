// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnInit, ElementRef } from '@angular/core';

import { CoreQuestionBaseComponent } from '@features/question/classes/base-question-component';
import { CoreQuestionHelper } from '@features/question/services/question-helper';

/**
 * Component to render a gap select question.
 */
@Component({
    selector: 'addon-qtype-splitset',
    templateUrl: 'addon-qtype-splitset.html',
    styleUrls: ['splitset.scss'],
})
export class AddonQtypeSplitsetComponent extends CoreQuestionBaseComponent implements OnInit {

    constructor(elementRef: ElementRef) {
        super('AddonQtypeSplitsetComponent', elementRef);
    }

    /**
     * Component being initialized.
     */
    ngOnInit(): void {
        this.initOriginalTextComponent('.qtext');
    }

    /**
     * The question has been rendered.
     */
    questionRendered(): void {
        CoreQuestionHelper.treatCorrectnessIconsClicks(
            this.hostElement,
            this.component,
            this.componentId,
            this.contextLevel,
            this.contextInstanceId,
            this.courseId,
        );
    }

}
