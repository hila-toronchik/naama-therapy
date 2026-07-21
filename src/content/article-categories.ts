export const articleCategories = [
	{
		slug: 'trauma-and-ptsd',
		name: 'טראומה ופוסט־טראומה במבוגרים',
		description: 'על האופן שבו חוויות קשות עשויות להמשיך להשפיע, ועל אפשרויות לעיבוד בקצב מותאם.',
	},
	{
		slug: 'addictions-and-compulsive-patterns',
		name: 'התמכרויות ודפוסים כפייתיים',
		description: 'התבוננות בדפוסים שחוזרים, בתפקיד שהם ממלאים ובאפשרות ליצור בהדרגה יותר בחירה.',
	},
	{
		slug: 'anxiety-and-emotional-regulation',
		name: 'חרדה, הצפה וויסות רגשי',
		description: 'על תגובות של חרדה והצפה, הקשר לגוף והאפשרות להרחיב את היכולת לשאת ולווסת.',
	},
	{
		slug: 'life-crises-and-change',
		name: 'משברי חיים, פרידות ושינויים',
		description: 'מחשבות על תקופות מעבר, אובדן, פרידה והצורך למצוא כיוון בתוך מציאות משתנה.',
	},
	{
		slug: 'relationships-attachment-and-self-worth',
		name: 'קשיים ביחסים, התקשרות וערך עצמי',
		description: 'על דפוסי קשר, קרבה, אמון והאופן שבו היחסים עם עצמנו ועם אחרים משפיעים זה על זה.',
	},
	{
		slug: 'online-emotional-therapy',
		name: 'טיפול רגשי מקוון',
		description: 'מידע על האפשרות לטיפול מקוון, התנאים שיכולים לתמוך בו ובדיקת ההתאמה למסגרת.',
	},
] as const;

export function getArticleCategory(slug: string) {
	return articleCategories.find((category) => category.slug === slug);
}
