import{t as e}from"./shaderStore-D-XQlhUT.js";import{t}from"./helperFunctions-KvWMTCW2.js";const n=`rgbdEncodePixelShader`;e.ShadersStore[n]||(e.ShadersStore[n]=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`);const r=[t];for(let t of r)e.IncludesShadersStore[t.name]||(e.IncludesShadersStore[t.name]=t.shader);