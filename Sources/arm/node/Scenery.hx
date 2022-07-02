package arm.node;

@:keep class Scenery extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _TranslateObject = new armory.logicnode.TranslateObjectNode(this);
		var _OnUpdate = new armory.logicnode.OnUpdateNode(this);
		_OnUpdate.addOutputs([_TranslateObject]);
		_TranslateObject.addInput(_OnUpdate, 0);
		_TranslateObject.addInput(new armory.logicnode.ObjectNode(this, ""), 0);
		_TranslateObject.addInput(new armory.logicnode.VectorNode(this, 0.0, -0.04999999701976776, 0.0), 0);
		_TranslateObject.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
