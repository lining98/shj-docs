# 图片上传

```vue {2-5,9}
<template>
	<a-form-item name="afterSaleImage" label="上传凭证" extra="格式：jpeg、png、jpg">
		<ImageUploader :file-list="modelForm.afterSaleImage" @update:file-list="(val) => (modelForm.afterSaleImage = val)" />
	</a-form-item>
</template>

<script setup lang="ts">
	import { ImageUploader } from '@/components/basic/image/index';
</script>
```
