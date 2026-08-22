import{t as e}from"./shaderStore-D-XQlhUT.js";import{t}from"./helperFunctions-Div0HIE7.js";const n=`rgbdEncodePixelShader`;e.ShadersStoreWGSL[n]||(e.ShadersStoreWGSL[n]=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`);const r=[t];for(let t of r)e.IncludesShadersStoreWGSL[t.name]||(e.IncludesShadersStoreWGSL[t.name]=t.shader);