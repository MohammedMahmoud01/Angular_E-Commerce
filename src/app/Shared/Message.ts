import {Injectable} from "@angular/core"

declare var toastr:any;

@Injectable()
export class MessageService
{
    success(message:string)
    {
        toastr.success('is added to cart successfully', message);
    }

    Error(message:string)
    {
        toastr.warning(message);
    }

    Warning(message:string)
    {
        toastr.error('I do not think that word means what you think it means.', message);
    }
}
