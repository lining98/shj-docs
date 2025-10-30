# 导出

## 使用

```tsx
import { exportAxiosExcel } from '@/utils/Export2Excel';

const deriveEvent = () => {
	exportAxiosExcel('title', searchParams.value, Api.exportXXXXX, (loading) => {
		deriveLoading.value = loading;
	});
};
```
