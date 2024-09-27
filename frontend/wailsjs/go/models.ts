export namespace main {
	
	export class Shortcut {
	    id: string;
	    keyValue: string;
	    ctrl: boolean;
	    shift: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Shortcut(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.keyValue = source["keyValue"];
	        this.ctrl = source["ctrl"];
	        this.shift = source["shift"];
	    }
	}

}

