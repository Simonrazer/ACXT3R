// Auto-generated
let project = new Project('ACXT3R');

project.addSources('Sources');
project.addLibrary("C:/Dev/Armory/armsdk//armory");
project.addLibrary("C:/Dev/Armory/armsdk//iron");
project.addLibrary("C:/Dev/Armory/armsdk//lib//haxebullet");
project.addAssets("C:/Dev/Armory/armsdk//lib/haxebullet/js/ammo/ammo.js", { notinlist: true });
project.addParameter("--macro include('armory.trait')");
project.addParameter("--macro include('armory.trait.internal')");
project.addParameter("--macro include('armory.trait.physics')");
project.addParameter("--macro include('armory.trait.physics.bullet')");
project.addParameter("--macro include('armory.logicnode')");
project.addParameter('arm.node.Scenery');
project.addParameter("--macro keep('arm.node.Scenery')");
project.addParameter('arm.node.EnemyDeath');
project.addParameter("--macro keep('arm.node.EnemyDeath')");
project.addParameter('arm.node.Managing');
project.addParameter("--macro keep('arm.node.Managing')");
project.addParameter('arm.node.Laser');
project.addParameter("--macro keep('arm.node.Laser')");
project.addParameter('arm.node.Spawner');
project.addParameter("--macro keep('arm.node.Spawner')");
project.addParameter('arm.node.UI');
project.addParameter("--macro keep('arm.node.UI')");
project.addParameter('arm.node.Pause');
project.addParameter("--macro keep('arm.node.Pause')");
project.addParameter('arm.node.JetControls');
project.addParameter("--macro keep('arm.node.JetControls')");
project.addParameter('arm.node.SelfDeath');
project.addParameter("--macro keep('arm.node.SelfDeath')");
project.addParameter('armory.trait.physics.bullet.RigidBody');
project.addParameter("--macro keep('armory.trait.physics.bullet.RigidBody')");
project.addParameter('armory.trait.physics.bullet.PhysicsWorld');
project.addParameter("--macro keep('armory.trait.physics.bullet.PhysicsWorld')");
project.addParameter('arm.node.Obstacles');
project.addParameter("--macro keep('arm.node.Obstacles')");
project.addParameter('arm.node.Shooting');
project.addParameter("--macro keep('arm.node.Shooting')");
project.addParameter('arm.node.EnemyAI_M');
project.addParameter("--macro keep('arm.node.EnemyAI_M')");
project.addParameter('arm.node.EnemyAI_S');
project.addParameter("--macro keep('arm.node.EnemyAI_S')");
project.addParameter('arm.node.Cursor');
project.addParameter("--macro keep('arm.node.Cursor')");
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/bloom_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/blur_adaptive_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/blur_edge_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/blur_gaus_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/compositor_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/compositor_pass.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/deferred_indirect.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/deferred_indirect.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/deferred_light.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/deferred_light_quad.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/pass.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/pass_lamp_volume.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/pass_viewray.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/pass_viewray2.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/smaa_blend_weight.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/smaa_blend_weight.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/smaa_edge_detect.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/smaa_edge_detect.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/smaa_neighborhood_blend.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/smaa_neighborhood_blend.vert.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/ssao_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/ssr_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/world_pass.frag.glsl');
project.addShaders('C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Shaders/world_pass.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Cursor_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Cursor_mesh.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Cursor_shadowmap.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Cursor_shadowmap.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Glass_ENimi0_001_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Glass_ENimi0_001_armskin_mesh.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Glass_ENimi0_001_armskin_shadowmap.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Glass_ENimi0_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Glass_ENimi0_mesh.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Glass_ENimi0_shadowmap.vert.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Grass_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//HealthBar_Mask_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Healthbar_Display_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Intakes_001_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Intakes_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Intakes_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//LaserB_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//LaserR_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//MetalOrange_001_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//MetalOrange_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//MetalRed_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//MetalRed_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Mountain_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//RiverBead_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Sand_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//ShipGlass_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//ShipGlass_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Ship_BodyEnimi0_001_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Ship_BodyEnimi0_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Ship_Body_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Ship_Body_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Thrusters_001_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Thrusters_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Thrusters_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//TreeBark_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//TreeBranch_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Water_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Weapons_armskin_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//Weapons_mesh.frag.glsl');
project.addShaders('build_ACXT3R/compiled/Shaders//armdefault_mesh.frag.glsl');
project.addAssets("build_ACXT3R/compiled/Shaders/Cursor_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Glass_ENimi0_001_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Glass_ENimi0_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Grass_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/HealthBar_Mask_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Healthbar_Display_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Intakes_001_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Intakes_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Intakes_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/LaserB_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/LaserR_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/MetalOrange_001_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/MetalOrange_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/MetalRed_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/MetalRed_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Mountain_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/RiverBead_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Sand_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/ShipGlass_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/ShipGlass_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Ship_BodyEnimi0_001_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Ship_BodyEnimi0_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Ship_Body_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Ship_Body_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Thrusters_001_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Thrusters_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Thrusters_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/TreeBark_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/TreeBranch_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Water_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Weapons_armskin_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/Weapons_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/armdefault_data.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Shaders/shader_datas.arm", { notinlist: true });
project.addAssets("C:/Dev/Armory/armsdk/armory/Assets/brdf.png", { notinlist: true });
project.addAssets("C:/Dev/Armory/armsdk/armory/Assets/noise8.png", { notinlist: true });
project.addAssets("C:/Dev/Armory/armsdk/armory/Assets/smaa_area.png", { notinlist: true });
project.addAssets("C:/Dev/Armory/armsdk/armory/Assets/smaa_search.png", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/Scene.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_Armature_JetExplosion.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_ENimi0-Explosion_ENimi0Explosion.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_Enemyanim.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_IcosphereAction.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_Obstacleanim.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_SphereAction.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_Thruster_LAction.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/action_Thruster_RAction.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Barrier.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cone.003.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cube.002.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cube.005.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cube.006.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cylinder.002.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cylinder.004.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Cylinder.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_ENimi0Explosion_Cells.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Forest.003.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Healthbar-Mask.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Icosphere.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Jet.002.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_JetExplosion_cells.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Laser.004.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Laser.005.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Life.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Mountain.003.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Plane.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Sphere.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Suzanne.002.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Suzanne.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Text.001.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Text.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Thruster.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Tree.006.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Tree.007.arm", { notinlist: true });
project.addAssets("C:/Users/Simon Deurell/Google Drive/ACXT3R/build_ACXT3R/compiled/Assets/meshes/mesh_Water.003.arm", { notinlist: true });
project.addAssets("SkyForest.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_irradiance.arm", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_0.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_1.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_2.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_3.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_4.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_5.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_6.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_7.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_8.hdr", { notinlist: true });
project.addAssets("build_ACXT3R/compiled/Assets/envmaps/SkyForest_radiance_9.hdr", { notinlist: true });
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_depthprepass');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_size=1024');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=SMAA');
project.addDefine('rp_supersampling=1');
project.addDefine('rp_gi=Off');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('rp_bloom');
project.addDefine('rp_ssr');
project.addDefine('rp_ssr_half');
project.addDefine('arm_physics');
project.addDefine('arm_bullet');
project.addDefine('arm_shaderload');
project.addDefine('arm_soundcompress');
project.addDefine('arm_fast');


resolve(project);
