type DetectBuildPlatformOptions = {
	env: Record<string, string | undefined>;
	isCI: boolean;
	ciName?: string | null;
	isDev?: boolean;
	unknownBuildPlatform?: string;
};
// 优先使用新的 Furina 环境变量，同时兼容原主题的旧变量名
const BUILD_PLATFORM_OVERRIDE_KEYS = [
	"FURINA_BUILD_PLATFORM",
	"FIREFLY_BUILD_PLATFORM",
] as const;

function hasNonEmptyEnv(
	env: Record<string, string | undefined>,
	key: string,
): boolean {
	const value = env[key];
	return typeof value === "string" && value.trim() !== "";
}

function envUrlHostEquals(
	env: Record<string, string | undefined>,
	key: string,
	expectedHost: string,
): boolean {
	const value = env[key];
	if (typeof value !== "string" || value.trim() === "") {
		return false;
	}

	try {
		// ESA 当前构建环境里没有平台专属键名，用稳定的内部er_address键值 host 做识别
		return new URL(value).host.toLowerCase() === expectedHost.toLowerCase();
	} catch {
		return false;
	}
}

export function detectBuildPlatform({
	env,
	isCI,
	ciName,
	isDev = false,
	unknownBuildPlatform = "Unknown CI",
}: DetectBuildPlatformOptions): string {
	const overrideValue = BUILD_PLATFORM_OVERRIDE_KEYS.map((key) => env[key]).find(
		(value) => typeof value === "string" && value.trim() !== "",
	);
	if (typeof overrideValue === "string" && overrideValue.trim() !== "") {
		// 环境变量显式覆盖最优先；未设置时继续自动识别部署平台
		return overrideValue.trim();
	}
	// ciName 自动识别
	if (ciName?.trim()) {
		return ciName.trim();
	}
	//补充EdgeOne Pages 和 ESA Pages 识别逻辑
	if (hasNonEmptyEnv(env, "EDGEONE_PROJECT_ID")) {
		return "EdgeOne Pages";
	}

	if (envUrlHostEquals(env, "er_address", "build-script.esa.ialicdn.com")) {
		return "ESA Pages";
	}

	if (isCI) {
		return unknownBuildPlatform;
	}

	return isDev ? "Local Dev" : "Local";
}
