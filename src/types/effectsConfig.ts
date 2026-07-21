export type SakuraConfig = {
	enable: boolean; // 是否启用水蓝气泡特效
	switchable?: boolean; // 是否允许用户切换水蓝气泡特效
	sakuraNum: number; // 气泡数量（保留旧字段名以兼容现有设置）
	limitTimes: number; // 兼容旧配置字段
	size: {
		min: number; // 气泡最小尺寸倍数
		max: number; // 气泡最大尺寸倍数
	};
	opacity: {
		min: number; // 气泡最小不透明度
		max: number; // 气泡最大不透明度
	};
	speed: {
		horizontal: {
			min: number; // 最小水平漂移距离
			max: number; // 最大水平漂移距离
		};
		vertical: {
			min: number; // 最短上浮时长
			max: number; // 最长上浮时长
		};
		rotation: number; // 兼容旧配置字段
		fadeSpeed: number; // 兼容旧配置字段
	};
	zIndex: number; // 气泡层级
};

export type MouseEffectsConfig = {
	enable: boolean;
	colors: {
		primary: string;
		secondary: string;
		glow: string;
	};
	cursor: {
		size: number;
		hotspotX: number;
		hotspotY: number;
	};
	trail: {
		enable: boolean;
		minDistance: number;
		maxStreaks: number;
		streakLength: number;
		durationMs: number;
	};
	dragTrail: {
		enable: boolean;
		activationDistance: number;
		pointSpacing: number;
		starSize: number;
		maxPoints: number;
		durationMs: number;
	};
	click: {
		enable: boolean;
		crossSize: number;
		durationMs: number;
	};
};
