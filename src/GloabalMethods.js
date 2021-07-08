/**!
 * @author 清扬陌客<qingyangmoke@qq.com>
 * 增加一些静态方法 简化操作
 */
import TinyFactory from './TinyFactory';

/**
 * 添加骨骼数据
 *
 * @function
 * @global
 * @static
 * @name addDragonBonesData
 * @memberof Tiny.DragonBones
 * @param {object} dragonBonesData - 从DragonBones Pro 中导出的骨骼数据
 * @return {dragonBones.DragonBonesData} dragonBonesData
 */
function addDragonBonesData(dragonBonesData) {
  return TinyFactory.factory.parseDragonBonesData(dragonBonesData);
}

/**
 * 添加骨骼素材
 *
 * @function
 * @global
 * @static
 * @name addTextureAtlasData
 * @memberof Tiny.DragonBones
 * @param {object} textureAtlasData - 素材json数据
 * @param {Tiny.BaseTexture} texture - 素材png图片
 */
function addTextureAtlasData(textureAtlasData, texture) {
  return TinyFactory.factory.parseTextureAtlasData(textureAtlasData, texture);
}

/**
 * 创建一个指定名称的骨架，并使用骨架的显示容器来更新骨架动画。
 *
 * @name buildArmatureDisplay
 * @function
 * @global
 * @static
 * @memberof Tiny.DragonBones
 * @param {string} armatureName - 骨架名称。
 * @param {string} dragonBonesName - 龙骨数据名称，如果未设置，将检索所有的龙骨数据，如果多个数据中包含同名的骨架数据，可能无法创建出准确的骨架。
 * @param {string} skinName  - 皮肤名称，如果未设置，则使用默认皮肤。
 * @param {string} textureAtlasName  - 贴图集数据名称，如果未设置，则使用龙骨数据。
 */
function buildArmatureDisplay(armatureName, dragonBonesName, skinName, textureAtlasName) {
  return TinyFactory.factory.buildArmatureDisplay(armatureName, dragonBonesName, skinName, textureAtlasName);
}

export {
  addDragonBonesData,
  addTextureAtlasData,
  buildArmatureDisplay,
};
