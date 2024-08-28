import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Measure extends Model{};

Measure.init({
    uuid: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    customeCode:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    measureDateTime:{
        type: DataTypes.DATE,
        allowNull:false,
    },
    measureType:{
        type:DataTypes.ENUM('WATER','GAS'),
        allowNull:false,
    },
    imageUrl:{
        type: DataTypes.STRING,
    },
    measureValue:{
        type:DataTypes.INTEGER,
    },
    hashConfirmed:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
    },

}, {
    sequelize,
    modelName: 'Measure',
});

export default Measure;