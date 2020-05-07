/**
 * DragonBones - The TinyJS plugin
 *
 * @name        tinyjs-plugin-dragonbones
 * @overview    The Tiny.js plugin of dragonbones
 * @author      清扬陌客
 * @license     MIT
 */

/**
 * Tiny.js
 * @external Tiny
 * @see {@link http://tinyjs.net/}
 */

/**
 * DragonBonesJS
 * @external dragonBones
 * @see {@link https://github.com/DragonBones/DragonBonesJS}
 */

/**
 * @namespace Tiny.DragonBones
 */
import dragonBones from '../libs/dragonBones';
import TinyArmatureDisplay from './TinyArmatureDisplay';
import TinyTextureAtlasData from './TinyTextureAtlasData';
import TinyTextureData from './TinyTextureData';
import TinySlot from './TinySlot';
import DisplayType from './DisplayType';
import BlendMode from './BlendMode';
import BoundingBoxType from './BoundingBoxType';
import TinyFactory from './TinyFactory';
import { addDragonBonesData, addTextureAtlasData, buildArmatureDisplay } from './GloabalMethods';
import mesh from 'tinyjs-plugin-mesh/index';

const { Mesh } = mesh;
const { BaseObject, BaseFactory, WorldClock, Armature, Animation, AnimationState, Bone } = dragonBones;

export {
  TinyArmatureDisplay,
  TinyTextureData,
  TinyTextureAtlasData,
  TinySlot,
  DisplayType,
  BlendMode,
  BoundingBoxType,
  TinyFactory,

  addDragonBonesData,
  addTextureAtlasData,
  buildArmatureDisplay,

  Bone,
  BaseObject,
  BaseFactory,
  WorldClock,
  Armature,
  Animation,
  AnimationState,

  Mesh,
};
