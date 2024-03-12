class EventItemData {
    constructor(jsonData, index) {
        if (!jsonData.name)
            throw new Error("EventItemData 'name' not found!");

        if (!jsonData.dateString)
            throw new Error("EventItemData 'dateString' not found!");

        if (!jsonData.description)
            throw new Error("EventItemData 'description' not found!");

        if (!jsonData.src)
            throw new Error("EventItemData 'src' not found!");

        this.name = jsonData.name;
        this.dateString = jsonData.dateString;
        this.description = jsonData.description;
        this.src = jsonData.src;
        this.index = index;
    }
}