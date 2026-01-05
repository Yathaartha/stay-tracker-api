export const up = async ({ context: queryInterface }) => {
  await queryInterface.renameColumn(
    "Availabilities",
    "lisiting_id",
    "listing_id"
  );
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.renameColumn(
    "Availabilities",
    "listing_id",
    "lisiting_id"
  );
};

