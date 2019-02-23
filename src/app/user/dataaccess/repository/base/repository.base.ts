import mongoose from 'mongoose';

export class RepositoryBase<T extends mongoose.Document> {

    private schemaModel: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.schemaModel = schemaModel;
    }

    retrieve(field: any, callback: (error: any, result: any) => void) {
        this.schemaModel.find(field, (error: any, result: any) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    create(item: any, callback:(error: any, result: any)=> void) {
        this.schemaModel.create(item, (error: any, result: any) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }
    
}