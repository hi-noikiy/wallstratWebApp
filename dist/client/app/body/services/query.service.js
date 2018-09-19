import { BehaviorSubject } from "rxjs";
import "rxjs/Rx";
var QueryService = /** @class */ (function () {
    function QueryService() {
        // public symbolQuery : Subject<string> = new Subject<string>();
        this.symbolQuery = new BehaviorSubject('BTC-USD');
        // getQuerService():Observable<any>{
        //    	return this.symbolQuery.asObservable();
        //  	}
    }
    return QueryService;
}());
export { QueryService };
//# sourceMappingURL=query.service.js.map