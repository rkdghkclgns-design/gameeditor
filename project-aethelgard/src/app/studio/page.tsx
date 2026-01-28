'use client'

import { useState } from 'react'

type Tab = 'story' | 'items' | 'characters' | 'skills'

export default function StudioPage() {
    const [activeTab, setActiveTab] = useState<Tab>('story')

    return (
        <div className="flex h-[calc(100vh-4rem)]">
            {/* Sidebar */}
            <aside className="w-64 bg-[#111] border-r border-white/10 p-4 flex flex-col">
                <h2 className="text-lg font-semibold mb-6 px-2">📁 프로젝트</h2>

                <nav className="flex-1 space-y-1">
                    <TabButton
                        active={activeTab === 'story'}
                        onClick={() => setActiveTab('story')}
                        icon="📝"
                        label="스토리"
                    />
                    <TabButton
                        active={activeTab === 'items'}
                        onClick={() => setActiveTab('items')}
                        icon="🎒"
                        label="아이템"
                    />
                    <TabButton
                        active={activeTab === 'characters'}
                        onClick={() => setActiveTab('characters')}
                        icon="👤"
                        label="캐릭터"
                    />
                    <TabButton
                        active={activeTab === 'skills'}
                        onClick={() => setActiveTab('skills')}
                        icon="⚡"
                        label="스킬"
                    />
                </nav>

                <div className="pt-4 border-t border-white/10">
                    <button className="w-full px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">
                        ⚙️ 설정
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="max-w-4xl">
                    {activeTab === 'story' && <StoryEditor />}
                    {activeTab === 'items' && <DataTable title="아이템 목록" />}
                    {activeTab === 'characters' && <DataTable title="캐릭터 목록" />}
                    {activeTab === 'skills' && <DataTable title="스킬 목록" />}
                </div>
            </main>
        </div>
    )
}

function TabButton({ active, onClick, icon, label }: {
    active: boolean;
    onClick: () => void;
    icon: string;
    label: string
}) {
    return (
        <button
            onClick={onClick}
            className={`w-full px-4 py-2.5 rounded-lg text-left flex items-center gap-3 transition-colors ${active
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    )
}

function StoryEditor() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">📝 스토리 에디터</h1>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors">
                    + 새 챕터
                </button>
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <p className="text-gray-400 text-center py-12">
                    스토리를 작성하려면 위의 "새 챕터" 버튼을 클릭하세요.
                </p>
            </div>
        </div>
    )
}

function DataTable({ title }: { title: string }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">{title}</h1>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors">
                    + 추가
                </button>
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-white/5">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">이름</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">설명</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">작업</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr>
                            <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                데이터가 없습니다. "추가" 버튼을 클릭하여 시작하세요.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
