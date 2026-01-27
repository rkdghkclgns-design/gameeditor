export default function ControlPage() {
    return (
        <div className="min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">🗼 관제탑</h1>
                    <p className="text-gray-400">프로젝트 현황을 한눈에 파악하세요.</p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatCard label="총 스토리" value="12" icon="📖" />
                    <StatCard label="캐릭터" value="24" icon="👤" />
                    <StatCard label="아이템" value="156" icon="🎒" />
                    <StatCard label="스킬" value="48" icon="⚡" />
                </div>

                {/* Recent Activity */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">최근 활동</h2>
                    <div className="bg-white/5 rounded-2xl border border-white/10 divide-y divide-white/10">
                        <ActivityItem
                            action="스토리 수정"
                            target="메인 퀘스트 - 1장"
                            time="5분 전"
                        />
                        <ActivityItem
                            action="아이템 추가"
                            target="전설 검 - 아스트라"
                            time="1시간 전"
                        />
                        <ActivityItem
                            action="캐릭터 생성"
                            target="NPC - 마을 촌장"
                            time="3시간 전"
                        />
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">빠른 작업</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <QuickActionButton label="새 스토리 작성" href="/studio" />
                        <QuickActionButton label="데이터 내보내기" href="#" />
                        <QuickActionButton label="팀원 초대" href="#" />
                    </div>
                </section>
            </div>
        </div>
    )
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{icon}</span>
                <span className="text-3xl font-bold">{value}</span>
            </div>
            <p className="text-gray-400">{label}</p>
        </div>
    )
}

function ActivityItem({ action, target, time }: { action: string; target: string; time: string }) {
    return (
        <div className="p-4 flex items-center justify-between">
            <div>
                <span className="text-indigo-400">{action}</span>
                <span className="text-gray-500 mx-2">•</span>
                <span>{target}</span>
            </div>
            <span className="text-gray-500 text-sm">{time}</span>
        </div>
    )
}

function QuickActionButton({ label, href }: { label: string; href: string }) {
    return (
        <a
            href={href}
            className="p-4 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-center hover:bg-indigo-600/30 transition-colors"
        >
            {label}
        </a>
    )
}
