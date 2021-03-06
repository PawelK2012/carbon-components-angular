import {
	Component,
	OnInit,
	Injector,
	ViewContainerRef,
	ViewChild
} from "@angular/core";
import { DialogPlaceholderService } from "./dialog-placeholder.service";

/**
 * Using a dialog (popover, tooltip, etc) with appendToBody="true" in your application
 * requires *this* component (`n-dialog-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * A more complete example for `Popover` is given as follows:
 *
 * ```html
 * <button [ibmPopover]="Hello" appendToBody="true"></button>
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * @export
 * @class DialogPlaceholderComponent
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-dialog-placeholder",
	template: `<div #dialogPlaceholder></div>`
})
export class DialogPlaceholderComponent implements OnInit {
	/**
	 * Maintains a reference to the view DOM element of the `DialogPlaceholderComponent`.
	 * @type {ViewContainerRef}
	 * @memberof DialogPlaceholderComponent
	 */
	@ViewChild("dialogPlaceholder", { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

	/**
	 * Creates an instance of `DialogPlaceholderComponent`.
	 * @param {DialogPlaceholderService} dialogPlaceholderService
	 * @memberof DialogPlaceholderComponent
	 */
	constructor(public dialogPlaceholderService: DialogPlaceholderService) { }

	/**
	 * Initializes the component using `ModalService`.
	 * @memberof DialogPlaceholderComponent
	 */
	ngOnInit(): void {
		this.dialogPlaceholderService.registerViewContainerRef(this.viewContainerRef);
	}
}
