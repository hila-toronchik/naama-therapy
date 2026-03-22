/**
 * Scroll Reveal Animation System
 * מערכת אנימציות עדינה ומקצועית עם Intersection Observer
 */

// בדיקה אם המשתמש מעדיף פחות תנועה
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// אם המשתמש מעדיף פחות תנועה, לא מפעילים אנימציות
if (prefersReducedMotion) {
	// הוספת קלאס is-visible לכל האלמנטים מיד
	document.querySelectorAll('.scroll-reveal').forEach(el => {
		el.classList.add('is-visible');
	});
} else {
	// הגדרות Intersection Observer
	const observerOptions = {
		root: null, // viewport
		rootMargin: '0px 0px -100px 0px', // מתחיל אנימציה קצת לפני שהאלמנט נכנס למסך
		threshold: 0.15 // 15% מהאלמנט צריך להיות נראה
	};

	// יצירת Observer
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// האלמנט נכנס לתצוגה - הוספת קלאס is-visible
				entry.target.classList.add('is-visible');
				
				// הפסקת מעקב אחרי האלמנט (אנימציה רק פעם אחת)
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// מעקב אחרי כל האלמנטים עם scroll-reveal
	const revealElements = document.querySelectorAll('.scroll-reveal');
	revealElements.forEach(el => observer.observe(el));

	// אנימציה מיוחדת לאלמנטים שכבר במסך בטעינה
	const revealOnLoad = () => {
		const elementsInView = document.querySelectorAll('.scroll-reveal');
		elementsInView.forEach((el, index) => {
			const rect = el.getBoundingClientRect();
			const isInView = rect.top < window.innerHeight && rect.bottom > 0;
			
			if (isInView) {
				// עיכוב קטן לכל אלמנט בעת טעינה
				setTimeout(() => {
					el.classList.add('is-visible');
					observer.unobserve(el);
				}, index * 80);
			}
		});
	};

	// הפעלה בעת טעינת הדף
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', revealOnLoad);
	} else {
		revealOnLoad();
	}
}
