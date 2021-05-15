/**
 * Each key, when used as an anchor prefix, will be expanded into a full link
 * based on the rules of `format`.
 *
 * Format can be...
 * - `internal` for Craft+Commerce class docs
 * - `yii2` and `yii1` for Yii docs
 * - `config` for Craft config settings
 * - `generic` for replacement of the supplied `base` only and no additional formatting
 */
module.exports = {
  'config3': { base: '/bet365/config/config-settings.md#', format: 'config' },
};
