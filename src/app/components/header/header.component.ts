import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";
import { DataService } from "src/app/services/data/data.service";

@Component ({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
	constructor (public dataService : DataService, private apiService : ApiService) {}
	
	logout () {
		this.apiService.deleteSession ();
	}
	
	ngOnInit () : void {}
}