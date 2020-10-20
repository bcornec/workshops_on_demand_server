"use strict";
/**
 * @swagger
 *  components:
 *    schemas:
 *      Workshop:
 *        type: object
 *        required:
 *          - name
 *          - notebook
 *          - capacity
 *          - range
 *          - location
 *        properties:
 *          id:
 *            type: integer
 *          name:
 *            type: string
 *          notebook:
 *            type: string
 *          description:
 *            type: string
 *          capacity:
 *            type: integer
 *          range:
 *            type: array
 *          reset:
 *            type: boolean
 *          ldap:
 *            type: boolean
 *          sessionId:
 *            type: integer
 *          sessionType:
 *            type: string
 *          location:
 *            type: string
 *          avatar:
 *            type: string
 *          role:
 *            type: string
 *          preRequisite:
 *            type: string
 *          replayLink:
 *            type: string
 *          active:
 *            type: boolean
 *          createdAt:
 *            type: string
 *            format: date-time
 *          updatedAt:
 *            type: string
 *            format: date-time
 *        example:
 *           name: Grommet
 *           capacity: 20
 *           notebook: WKSHP-Grommet
 *           location: grenoble
 */
module.exports = (sequelize, DataTypes) => {
  const Workshop = sequelize.define(
    "workshop",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      notebook: DataTypes.STRING,
      description: DataTypes.TEXT,
      capacity: DataTypes.INTEGER,
      range: DataTypes.ARRAY(DataTypes.INTEGER),
      reset: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      ldap: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      sessionId: DataTypes.INTEGER,
      sessionType: DataTypes.STRING,
      location: DataTypes.STRING,
      avatar: DataTypes.STRING,
      role: DataTypes.STRING,
      preRequisite: DataTypes.TEXT,
      replayLink: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  Workshop.associate = function(models) {
    // associations can be defined here
  };
  return Workshop;
};