class Reminder {

    private _reminderName: string
    private _reminderState: boolean;
    private _reminderTag: string

    constructor(reminderName:string, reminderTag:string) {
        this._reminderName = reminderName
        this._reminderTag = reminderTag
    }

    modifyReminder(newReminderName: string):void {

    }
    modifyReminderState(newReminderState: string):void {
        this._reminderState = !(this._reminderState)
    }

}

const reminder = new Reminder ('Do the dishes', 'Chores')

const reminder2 = new Reminder ('Wash the car', 'Chores')


