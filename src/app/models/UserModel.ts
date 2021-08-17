export class UserInfoModel
{
	userName: string;
	password: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
